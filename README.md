# Autolist Lite
## Senior software engineer test app
Ken McKaba
ken@mckaba.com

This is a working prototype runnable from VSCode.

I started working on the front-end and realized I was spending more than the 4 hours requested. So, I left it all front-end and hooked up MongoDB-Atlas Realm for the database to track vin/view-count.

This would not be ideal for a serious app since I had to set the MongoDB service to allow-all.

If I had time, I would implement a back-end service using only AWS services. The API built with a lambda using DynamoDB for the view-count tracking and node-fetch to access the autolist service. The client app would access it, with Cognito authentication if needed, to serve the data from the autolist api, and to indicate when a vin was viewed.

I'd improve the styling of the app. I assume a mockup and component design library would be available to build from. I've used bootstrap and chakra.

I'd add unit tests with Jest and react-testing-library, mocking the calls to the services and adding jest snapshot tests.

I hope it demonstrates my abilities.

Thanks!
Ken McKaba
ken@mckaba.com
805-448-3390