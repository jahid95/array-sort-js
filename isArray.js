function megaFriends(friends){
    if(Array.isArray(friends)== false){
        return 'please provide array';
    }

    let mega =[0];
    for(const friend of friends){
        if(friend.length> mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends =['kutub', 'lion', 'shamol'];
const myBigbuddy = megaFriends(1234);
// console.log(myBigbuddy);
if(friends.indexOf('lion') != -1){
    // console.log('lion is here');
}

if(friends.includes('lion') ==true){
    console.log('lion is here too');
}

const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
console.log(combined);