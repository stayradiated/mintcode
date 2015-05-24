+++
date = "2014-01-20"
title = "SQL Server + node.js + OS X"
author = "Jono Cooper"
+++

Windows Azure Web Sites supports a number of platforms including node.js but only offers SQL Server for database hosting. It's a little confusing to get set up, especially if you're not running Windows.

For starters, you probably don't want to be using [Microsoft's official driver for node.js](https://github.com/windowsazure/node-sqlserver). It only runs on Windows and you need to download a bunch of huge dependencies to even compile it. The pre-built binaries that Microsoft offer didn't work for me either.

Instead, I recommend using [node-mssql](https://github.com/patriksimek/node-mssql) to connect to SQL Server. It works on all platforms, and doesn't require a crazy compilation step. However, it took me a while to even get a database connection because it loves to throw connection errors silently.

### Local Server

If you're running your own local SQL Server, you'll want to create a SQL user first - the standard Windows Authentication doesn't work with the node driver. My local SQL Server was located at `SERVER\SQLEXPRESS` but you'll have to specify this manually like in the example below.

    {
      user: 'username',
      password: 'password',
      server: 'SERVER',
      database: 'database',
      options: {
        port: '',
        instanceName: 'SQLEXPRESS'
      }
    }

### Windows Azure

Windows Azure also requires some special configuration. Connections have to be encrypted and you'll need to use a special format for your username.

    {
      user: 'username@server.database.windows.net',
      password: 'password',
      server: 'server.database.windows.net',
      database: 'database',
      options: {
        encrypt: true
      }
    }

So, that's it. After using these connection settings, you'll hopefully be able to query away. This took way too much time to figure out, so I hope this helps anyone who's having similar issues.
