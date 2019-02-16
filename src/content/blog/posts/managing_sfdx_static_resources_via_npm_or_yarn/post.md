![Salesforce logo](~posts/managing_sfdx_static_resources_via_npm_or_yarn/sflogo.png)

Anyone who's developed with [Salesforce DX (SFDX)](https://developer.salesforce.com/platform/dx) knows that package management via [static resources](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_resources.htm) is a huge pain. Essentially, static resources is for storing content such as JavaScript or images you need to reference elsewhere in Salesforce, like within a lightning component. 

In the case of JavaScript libraries, you *have* to store them within static resources to be able to reference elsewhere. Manually keeping all your libraries up to date is painful. You gotta manually check for updates, uploading newer libraries and repeat * ∞. Yikes 😳

Enter [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/en/) JavaScript dependency managment tools. 

# How?
- Get either package manager installed and initialize a project in your SFDX directory 
- Get the JavaScript packages that you want to utilize in Salesforce installed
- Install [cpx](https://github.com/mysticatea/cpx) using yarn/npm by doing a `yarn/npm install cpx --save` 
  - `cpx` is a JavaScript tool for file copying. We'll be using this to move files from `node_modules/` (where packages are installed), to the `staticresources/` folder
- Create a folder for your resource within `force-app/main/default/staticresources/` named $resourceName
 - Make sure you don't commit the contents of this folder to source control, because otherwise what's the point?
- Create accompanying metadata file in `force-app/main/default/staticresources/` named `$resourceName.resource-meta.xml` with the following structure:
  - ```
    <StaticResource xmlns="http://soap.sforce.com/2006/04/metadata">
        <cacheControl>Private</cacheControl>
        <contentType>application/x-zip-compressed</contentType>
        <description>$description</description>
      </StaticResource>
      ```
- Write a script in under the `scripts: {}` section of `package.json` called `copy-$resourceName` to copy the contents of the installed package from `node_modules/` into `staticresources/`
 - Here's an example script to move jquery from `node_modules/` to `staticresources/`: 
   - `"copy-jquery": "cpx \"node_modules/jquery/dist/jquery.min.js\" \"force-app/main/default/staticresources/jQuery/\""`
- Do a `yarn run copy-$resourceName` + push to your org and you should see an entry on the Static Resources page under Setup with a new entry! 

![jQuery in Static Resources](~posts/managing_sfdx_static_resources_via_npm_or_yarn/jquery.png)

That's all! Easy peasy :)


Learn more about Static Resources here: https://trailhead.salesforce.com/en/content/learn/modules/visualforce_fundamentals/visualforce_static_resources