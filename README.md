# Autolist Lite
## Senior software engineer test app
Ken McKaba
ken@mckaba.com

This is a working prototype runnable from VSCode: from a command line run `npm start` then from autolist-spa folder, run `code .`. Under `Run` menu choose `Start debugging` or `Run without debugging`.

I started working on the front-end and realized I was spending more than the 4 hours requested. So, I left it all front-end and hooked up MongoDB-Atlas Realm for the database to track vin/view-count.

This would not be ideal for a serious app since I had to set the MongoDB service to allow-all.

If I had time, I would implement a nodejs back-end. The ideal would be a service using only AWS services: the API built with a lambda using DynamoDB for the view-count tracking and node-fetch to access the autolist service. The client app would access it, with Cognito authentication if needed, to serve the data from the autolist api, and to indicate when a vin was viewed.

I'd improve the styling of the app. I assume a mockup and component design library would be provided to build from. I've used bootstrap and chakra.

I'd add unit tests with Jest and react-testing-library, mocking the calls to the services and adding jest snapshot tests.

I hope it demonstrates my abilities.

Thanks!
Ken McKaba
ken@mckaba.com
805-448-3390