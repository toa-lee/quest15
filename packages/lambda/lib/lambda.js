    exports.handler = async (event) => {
        var body = JSON.parse(JSON.stringify(event))
    
        let responseBody = {
            message: "Hello Lambda!",
            key1: body.key1
        };
        const response = {
            statusCode: 200,
            headers : {"Access-Control-Allow-Origin" : "*",
                    "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(responseBody)
        };
        return response;
    };
