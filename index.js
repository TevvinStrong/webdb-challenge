// Server listening
const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`*** Server is running on port ${PORT} ***`);
});
