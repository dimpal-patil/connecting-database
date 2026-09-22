# MongoDB Express Connection

A simple Express.js server that connects to a MongoDB Atlas database using the MongoDB driver and environment variables.


Open:

```text
http://localhost:3000/
```

The server returns a success message when the MongoDB connection is successful.

## Questions

### 1. Why is it important to whitelist IP addresses?

Whitelisting limits database access to trusted IP addresses. Allowing `0.0.0.0/0` lets anyone on the internet attempt to connect, increasing the risk of unauthorized access or attacks.

### 2. What is the purpose of `dotenv`?

`dotenv` loads environment variables from a `.env` file so sensitive information like database credentials isn't hard-coded. 

### 3. How would you debug a failed connection?

* Check the MongoDB connection string and username/password.
* Check MongoDB Atlas network access/IP settings.
* Check the terminal error message for specific connection issues.
