# We will need the following module to generate randomized lost packets
from socket import *
import random

# Create a UDP socket
# Notice the use of SOCK_DGRAM for UPD packets
serverSocket = socket(AF_INET, SOCK_DGRAM)
#Assing Ip address and port number to socket
serverSocket.bind(("",12000))

while True:
    #Generate random number in the range of 0 to 10
    rand = random.randint(0,10)
    # Receive the client packet along with the address it is coming from
    message, clientAddress = serverSocket.recvfrom(2048)
    # Capitalize the message from the client
    modifiedMessage = message.upper()
    # if rand is less than 4, we consider the packet lost and do not respond
    if rand < 4:
        continue
    # Otherwise, the server responds
    serverSocket.sendto(modifiedMessage, clientAddress)