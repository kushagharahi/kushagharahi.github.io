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
          echo "--- Dev Environment ---"
          echo "Node version: $(node -v)"
          echo "Python version: $(python3 --version)"

          # Set CHROME_PATH automatically for Lighthouse as requested in README
          export CHROME_PATH="${pkgs.chromium}/bin/chromium"

          # Prevent local npm from complaining about global directories
          export npm_config_prefix=$PWD/.npm-global
          export PATH=$PWD/node_modules/.bin:$PWD/.npm-global/bin:$PATH
        '';
      };
    });
}
