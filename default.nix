{ pkgs ? import ./nix {}
, sources ? import ./nix/sources.nix
, extraPkgs ? with pkgs; []
, profile ? ""     # left for backwards compat
, withRCC ? false  # left for backwards compat
}:

let

  gitignoreSource = pkgs.callPackage ./nix/pkgs/gitignore-source {};

  dev_node_modules = (import ./nix/node-dev-composition.nix { inherit pkgs; }).package.override {
    src = builtins.filterSource (path: type:
      (baseNameOf path) == "package.json" ||
      (baseNameOf path) == "package-lock.json" ) ./.;
    preRebuild = ''
      sed -i 's|"bin": "./carrot-rcc",||' package.json
    '';
    postInstall = ''
      mv $out/lib/node_modules/*/node_modules /tmp/_; rm -rf $out; mv /tmp/_ $out
    '';
  };

  run_node_modules = (import ./nix/node-run-composition.nix { inherit pkgs; }).package.override {
    src = builtins.filterSource (path: type:
      (baseNameOf path) == "package.json" ||
      (baseNameOf path) == "package-lock.json" ) ./.;
    preRebuild = ''
      sed -i 's|"bin": "./carrot-rcc",||' package.json
    '';
    postInstall = ''
      mv $out/lib/node_modules/*/node_modules /tmp/_; rm -rf $out; mv /tmp/_ $out
    '';
  };

in

pkgs.stdenv.mkDerivation rec {
  name = "carrot-rcc";
  # For now, we whitelist source files to prevent vagrant updates causing rebuild
  src = builtins.filterSource (path: type:
      (baseNameOf path) == "carrot_rcc.ts" ||
      (baseNameOf path) == "carrot_rcc_lib.ts" ||
      (baseNameOf path) == "Camunda.ts" ||
      (baseNameOf path) == "rollup.config.js" ||
      (baseNameOf path) == "node-dev-packages.nix" ||
      (baseNameOf path) == "package.json" ||
      (baseNameOf path) == "package-lock.json" ) ./.;
  buildPhase = ''
    source $stdenv/setup;
    cp -a ${dev_node_modules} node_modules
    node_modules/.bin/rollup -c rollup.config.js
  '';
  installPhase = ''
    source $stdenv/setup;
    mkdir -p $out/bin
    install carrot-rcc $out/bin/carrot-rcc
  '';
  postFixup = ''
    wrapProgram $out/bin/carrot-rcc \
      --prefix PATH : ${pkgs.lib.makeBinPath propagatedBuildInputs}
  '';
  buildInputs = with pkgs; [ makeWrapper bindfs ];
  propagatedBuildInputs = with pkgs; [
    nodejs-14_x
  ];
  shellHook = ''
    fusermount -qu node_modules && mkdir -p node_modules || true
    bindfs ${dev_node_modules} node_modules -o nonempty || cp -a ${dev_node_modules} node_modules
    export PATH=$(pwd)/node_modules/.bin:$PATH
  '';
}
