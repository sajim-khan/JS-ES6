document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'gray'
    }
    
    const trdFriend = document.getElementById('thirs-friend');
    trdFriend.style.textAlign = 'center'
    trdFriend.style.backgroundColor = 'red'
})


//new-friend add after click
document.getElementById('new-friend').addEventListener('click', function () {
    const friend = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.innerHTML = `
    <h3 class="friend-name">Friend-2</h3>
    <p>Ratione facere quaerat explicabo earum molestiae at amet minima beatae!</p>
    ` 
    friend.appendChild(newFriend);
});   