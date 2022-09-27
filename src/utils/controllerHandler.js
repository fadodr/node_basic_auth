
module.exports = (controllerFn) => {
    return (req, res) => {
        console.log(req);
        const body = [];
        req.on("data", (chunck) => {
          body.push(chunck);
        });
        req.on("end", async () => {
            const parsedBody = JSON.parse(Buffer.concat(body).toString());
            const result = await controllerFn(parsedBody);
            const { code, ...data } = result;
            res.statusCode = code ?? 200;
            res.setHeader("Content-Type", "application/json");
            res.write(
                JSON.stringify({
                    status: true,
                    message: "Logged in",
                    data,
                })
            );
            res.end();
        });
    }
}