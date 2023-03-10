#import socket module

from socket import *

import sys # In order to terminate the program

serverHost = "hostname"
serverPort = 1200

serverSocket = socket(AF_INET, SOCK_STREAM)
#Prepare a server socket
# Fill in start
serverSocket.bind(("", serverPort))
serverSocket.listen(1)
# Fill in end

while True:
    # Establish the connection
    print("Ready to serve...")
    connectionSocket, addr = serverSocket.accept()
    try:
        message = connectionSocket.recv(1024)
        filename = message.split()[1]
        f = open(filename[1:])
        outputdata = f.read()
        # Send on HTTP header line into socket
        # Fill in start
        header = "HTTP/1.0 200 OK\nConnection:close\nContent-Type:text/html\nContent-length:%d\n\n" % len(outputdata)
        # fill in end
        connectionSocket.send(header.encode())
        # Send the content of the requested file to the client
        for i in range(0, len(outputdata)):
            connectionSocket.send(outputdata[i].encode())
        connectionSocket.send("\r\n".encode())
        f.close()
        connectionSocket.close()
    except IOError:
        #Send response message for file not found
        #Fill in start
        
        response = "HTTP/1.0 404 Not Found\n\n" + "Something went wrong :("
        connectionSocket.send(response.encode())

        #Fill in end
        #Close client socket
        # Fill in start
        connectionSocket.close()

        #Fill in end
serverSocket.close()

sys.exit()#Terminate the program after sending the corresponding data

