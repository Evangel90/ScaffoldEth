// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld {
    string private text;

    constructor() {
        text = "Hello World!";
    }

    function helloWorld() public view returns (string memory)  {
        return text;
    }
    function helloWorldWithPrefix() public view returns (string memory) {
        return string.concat("My message is: ", text);
    }

    function setText(string memory newText) public {
        text = newText;
    }
}