{
  description = "Development environment for kusha.me";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          # Core dependencies
          nodejs_20
          python3

          # Tools used in the project
          nodePackages.npm

          # For 'npm run lighthouse'
          chromium
        ];

        shellHook = ''

          # 1. Provide the path to the Nix-installed Chromium
          export PUPPETEER_EXECUTABLE_PATH="${pkgs.chromium}/bin/chromium"

          # 2. Tell Puppeteer and plugins NOT to download their own broken chrome
          export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

          # 3. Existing Lighthouse/Nix paths
          export CHROME_PATH="$PUPPETEER_EXECUTABLE_PATH"
          export PATH=$PWD/node_modules/.bin:$PATH
        '';
      };
    });
}
