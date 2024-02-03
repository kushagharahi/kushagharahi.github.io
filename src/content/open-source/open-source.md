# Open Source Contributions

## Contributions I've made to packages not owned or maintained by me
### I also have a bunch of first party open source packages! Check out my [projects page](/projects) for a list of those!
![a git visual](~content/open-source/git.png)

### [ente Authenticator (auth app)](https://github.com/ente-io/auth/) --- [Add Lastpass Authenticator import](https://github.com/ente-io/auth/commit/1f42338c2ac1010908bff97b457693ab9f1db501)
- Pull Request: https://github.com/ente-io/auth/pull/437
- This feature allows users to easily transfer their Time-Based One-Time Password (TOTP) 2-factor authentication codes from LastPass Authenticator to the ente Authenticator app.
  - To use this feature, use the "Transfer accounts" option within Lastpass Authenticator Settings and press "Export accounts to file". Then import the JSON downloaded in the ente Authenticator app.

### [Prerenderer](https://github.com/Tofandel/prerenderer/) --- [add warning if html-webpack-plugin is not found](https://github.com/Tofandel/prerenderer/commit/410ae86a6ffb1022a3706877dbf2408ba9f87a50)
- Pull Request: https://github.com/Tofandel/prerenderer/pull/75
- This change addresses three things for the prerenderer webpack plugin:
    - makes it ultra clear that HtmlWebpackPlugin is required and why
    - logging an error if during compilation if HtmlWebpackPlugin is not used -- if you don't use the HtmlWebpackPlugin, the afterEmit hook doesn't do anything and the plugin silently does nothing
    - logging an error if the entryPath is not found in the assets

### [VerneMQ Operator](https://github.com/vernemq/vmq-operator) --- [Update image location & change operator deployment apiVersion #22](https://github.com/vernemq/vmq-operator/commit/37f75f8fba0fee1435f5699c0accc39743065b14)
- Pull Request: https://github.com/vernemq/vmq-operator/pull/22
- This change was a result of my findings deploying the VMQ Operator to Kubernetes
    - Update base image to vernemq/vernemq
    - make operator deployment v1 instead of v1beta since in k8s 1.16 the apis have changed
    - all Deployments api/v1beta2 -> apps/v1
    - undo apiVersion change for node-exporter-daemonset 

### [hs100](https://github.com/jkbenaim/hs100) --- [Add build instructions for Ubuntu](https://github.com/jkbenaim/hs100/commit/ee2c7de86ba01b0ba27649265647a3f9f761c898) & [remove make from build instructions](https://github.com/jkbenaim/hs100/commit/75e80d3b6ea31e92aba00b2fa3bb3c53f9c870e7)
- Pull Request: https://github.com/jkbenaim/hs100/pull/5
- Just some documentation updates because I'm not a C developer in my day-to-day so it wasn't apparent to me how to build the binary. So I added some instructions to save the next person 5-15 minutes.

### [bumper](https://github.com/bmartin5692/bumper) --- [add LOG_TO_STDOUT env var](https://github.com/bmartin5692/bumper/commit/436830cdd6ac039e6053bb402fc23186246ebc59)
- Pull Request: https://github.com/bmartin5692/bumper/pull/104 
- This allows users to forgo logging to logs/ and write directly to stdout. Old containers were getting very huge in size due to logging.

### [docker-transmission-openvpn](https://github.com/haugene/docker-transmission-openvpn/) --- [Add LOG_TO_STDOUT environment variable + documentation](https://github.com/haugene/docker-transmission-openvpn/commit/e3d27e8172fb50e1532f01a24420a34899285ae7)
- Pull Request: https://github.com/haugene/docker-transmission-openvpn/pull/1379
- The environment variable DOCKER_LOG, when set to true already logged Transmission logs to stdout. In my opinion this was a poor name, so I added a new variable LOG_TO_STDOUT and added documentation for it.

### [docker-transmission-openvpn](https://github.com/haugene/docker-transmission-openvpn/) --- [Remove DOCKER_LOG in favor of LOG_TO_STDOUT](https://github.com/haugene/docker-transmission-openvpn/commit/e0eaa0e643041a6639c6779f311010e8d21bd56a)
- Pull Request: https://github.com/haugene/docker-transmission-openvpn/pull/1380
- Removes environment variable DOCKER_LOG since it was depreciated in above change.

### [odfe-monitor-cli](https://github.com/mihirsoni/odfe-monitor-cli) --- [Backup full destination info](https://github.com/mihirsoni/odfe-monitor-cli/commit/65993f1526a883dbc4b5c97e3a8ab1d6c875ab23)
- Pull Request: https://github.com/mihirsoni/odfe-monitor-cli/pull/12
- Added a feature to the OpenDistro for Elasticsearch (Kibana) CLI to backup full destination info for alerts/monitors

### [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog/) --- [Update documentation for synthetic retry syntax](https://github.com/DataDog/terraform-provider-datadog/commit/b8fcdbc870de0f277ecf2245b5d8867cd6507b98)
- Pull Request: https://github.com/DataDog/terraform-provider-datadog/pull/645
- Fixed a documentation error for the Datadog Terraform Provider that would cause errors in configuration

### [runelite](https://github.com/runelite/runelite/) --- [Wintertodt plugin: Round start notification](https://github.com/runelite/runelite/commit/80f0000f894e817ceb0cf2f7c427b75f75ccb6d8)
- Pull Request: https://github.com/runelite/runelite/pull/9201
- Added a round start notification for the minigame Wintertodt for a old school Runescape 3rd party client, Runelite