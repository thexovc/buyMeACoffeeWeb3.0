// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


contract BuyMeACoffee {

    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    uint256 totalMemo;

    // emit an event when a memo is created
    event NewMemo(
        address from,
        uint256 amount,
        uint256 timestamp,
        string name,
        string message
    );

    // Memo struct 
    struct Memo {
        address from;
        uint256 amount;
        uint256 timestamp;
        string name;
        string message;
    }

    // List of all memos recieved from friends
    Memo [] memos;

    // Address of vontra
    address payable owner;

    // Deploy logic
    constructor() {
        owner = payable(msg.sender);
    }

    /**
    * @dev buy a coffee for contract owner
    * @param _name name of the coffee buyer
    * @param _message a nice message from the coffee buyer
    */ 
    function buyCoffee(string memory _name, string memory _message, uint256 _amount) public payable {
        require(msg.value > 0, "can't buy coffee with 0 eth");

        totalMemo += _amount;

        // Add memo to storage
        memos.push(Memo (
            msg.sender,
            _amount,
            block.timestamp,
            _name,
            _message
        ));

        // emit a log event when a new memo is created!
        emit NewMemo(
            msg.sender,
            _amount,
            block.timestamp,
            _name,
            _message
        );

    }

    /**
    * @dev send the entire balance stored in this contract to the owner
    */ 
    function withdrawTips() public onlyOwner {
        require(owner.send(address(this).balance));
    }

    /**
    * @dev retrieve all the memos received and stored on the blockchain 
    */ 
    function getMemos() public view returns(Memo[] memory) {
        return memos;
    }

}