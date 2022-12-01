# Serenity/JS Cucumber WebdriverIO Template 

## Note on update browser version

1. Go to google chrome,
   Click About google chrome to update to the latest version

2. Sync the chromedriver version by download and update
   _In MacOS_

```
brew install chromedriver
sudo xattr -r -d com.apple.quarantine /usr/local/bin
chromedriver
```

3. Make sure to update the chromedriver in the package.json

```
yarn add chromedriver
```

4. Make sure there is a .env file

```
BASE_URL=http://localhost:3000/
```

5. The Login is slow, add some timeout at the Given steps
{ timeout: 60000}

6a. To run the auth0 react app
```
Go to the repo https://github.com/auth0-samples/auth0-react-samples
Clone this repo
cd Sample-01

Go to Sample-01/src and update the content of auth_config.json
```
{
  "domain": "dev-farmer-spain.eu.auth0.com",
  "clientId": "lxxxx",
  "audience": "https://dev-farmer-spain.eu.auth0.com/api/v2/"
}
```

cd Sample-01
run
```
npm run dev
```

6b. To run the test
```
yarn test
```
