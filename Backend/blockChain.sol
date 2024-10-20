// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EthReceiver {
    address public owner;
    uint256 public totalReceived;

    event EthReceived(address sender, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function receiveSmallAmount() public payable {
        require(msg.value >= 0.0001 ether, "Please send exactly 0.0001 ETH");
        totalReceived += msg.value;
        emit EthReceived(msg.sender, msg.value);
    }

    function receiveLargerAmount() public payable {
        require(msg.value >= 0.001 ether, "Please send exactly 0.001 ETH");
        totalReceived += msg.value;
        emit EthReceived(msg.sender, msg.value);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner).transfer(balance);
        totalReceived = 0;
    }
}
