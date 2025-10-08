package web1_server;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.Date;

public class Server {

    private static final String SERVER_CONTEXT = "/myapp";

    static class MyHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String response = """
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>DIY Java Server</title>
                    </head>
                    <body>
                        <h1>Hello from my DIY Java Server!</h1>
                        <p>Current time: 
                        
                    """ + new Date() + """
                        
                        </p>
                    </body>
                    </html>
                    """;

            byte[] bytes = response.getBytes();
            exchange.sendResponseHeaders(200, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }
    }

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext(SERVER_CONTEXT, new MyHandler());
        server.start();
        System.out.println("Server running at: http://localhost:8080" + SERVER_CONTEXT);
    }
}