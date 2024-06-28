Welcome to the world of simplified visual testing with the SmartUI SDK.

Integrating seamlessly into your existing Cypress testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

## Pre-requisites for running tests through SmartUI SDK

- Basic understanding of Command Line Interface and Cypress is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Cypress SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as **CLI** for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots

### **Step 1:** Create/Update your test

You can clone the sample repository to run `Cyoress` tests with `SmartUI` and use the `cypress/e2e/smartuiSDKLocal.cy.js` file.

```bash {"id":"01J0P4HQHD9VF4350S67W32QVP"}
git clone https://github.com/LambdaTest/smartui-cypress-sdk-sample
cd smartui-cypress-sdk-sample

```

### **Step 2**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Cypress SDK` in your **Frontend** project.

```bash {"id":"01J0P4HQHD9VF4350S6BNCTPAG"}
npm i @lambdatest/smartui-cli @lambdatest/cypress-driver cypress@v13

```

**SmartUI SDK only supports Cypress versions >= 10.0.0
**

### **Step 3:** Configure your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash {"id":"01J0P4HQHD9VF4350S6EYY4MJ4"}
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"

```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash {"id":"01J0P4HQHD9VF4350S6J2B9MWE"}
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"

```

</TabItem>
<TabItem value="Powershell" label="Windows-PS">

```bash {"id":"01J0P4HQHD9VF4350S6NX3FHX9"}
$Env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"

```

</TabItem>
</Tabs>

### **Step 4:** Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash {"id":"01J0P4HQHD9VF4350S6S1FG90Z"}
npx smartui config:create smartui-web.json

```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json {"id":"01J0P4HQHD9VF4350S6TZ990PR"}
{
  "web": {
    "browsers": [
      "chrome", 
      "firefox",
      "safari",
      "edge",
      // Add more browser configuration here
    ],
    "viewports": [
      [
        1920
      ],
      [
        1366
      ],
      [
        360
      ]
    ], // Full Page screenshots are captured by default
    "waitForPageRender": 50000, // Optional (Should only be used in case of websites which take more than 30s to load)
    "waitForTimeout": 1000 //Optional (Should only be used in case lazy-loading/async components are present )

  }
}

```

Optional Keys in SmartUI configuration

**waitForPageRender** - If one or more `URLs` in your script require a relatively higher amount of time to load, you may use the `waitForPageRender` key in the config file to make sure the screenshots are rendered correctly. Avoid using the same in case your websites render in less than 30 seconds as it might increase the execution time of your tests.

**waitForTimeout** - If you are using any `async` components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.

#### For capturing viewport screenshots

To capture a screenshot of the content currently visible in your viewport, rather than the entire page, it's important to define the viewport width in your configuration settings. Specify the desired width parameters as demonstrated in the following example to ensure that the screenshot encompasses only the viewport area.

```json {"id":"01J0P4HQHD9VF4350S6YTTWZP9"}
    "viewports": [
      [
        1920,
        1080
      ],
      [
        1366,
        768
      ],
      [
        360,
        640
      ]
    ],

```

### **Step 5:** Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Cypress` test script, as shown below:

```js {"id":"01J0P4HQHD9VF4350S70G56CEK"}
/// <reference types="cypress" />

describe('Test Case name', () => {
  beforeEach(() => {

    cy.visit('Required URL')
  })

  it('SmartUI Snapshot', () => {
    cy.smartuiSnapshot('Screenshot Name');
  })
})



```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash {"id":"01J0P4HQHD9VF4350S71EKSB9Y"}
npx smartui --config .smartui.json exec -- npx cypress run --spec cypress/e2e/smartuiSDKLocal.cy.js --browser chrome --headed

```

## View SmartUI Results

You have successfully integrated SmartUI SDK with your Cypress tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.
