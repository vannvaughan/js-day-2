var scrolling = false;

function scrollToY(direction, yPos, increment) {
    if (yPos < 0) {
        yPos = 0;
    } else if (yPos > document.querySelector("body") .scrollHeight - window.innerHeight) {
        return;
    }
    scrolling = true;
    if (!increment) {
        increment = (yPos - window.scrollY) / 20.0 
    }
    if ((direction === '+' && window.scrollY < yPos) || (direction === '-' && window.scrollY > yPos)) {
        setTimeout(function() {
            window.scrollTo(0, window.scrollY + increment);
            scrollToY(direction, yPos, increment);
        }, 1);
    } else {
        console.log(window.scrollY)
        scrolling = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Add listeners for keyup and keydown
    document.addEventListener('keyup', function(event) {
        if (!scrolling && event.keyCode === 38) {
            scrollToY('-', window.scrollY - window.innerHeight + 40)
        } else if (!scrolling && event.keyCode === 40) {
            scrollToY('+', window.scrollY + window.innerHeight - 40)
        }
    })

    // Add event listeners to next buttons
    var nextButtons = document.querySelectorAll(".next-button")
    for (var i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function(event) {
            console.log("Clicked")
            scrollToY('+', parseInt(window.scrollY / window.innerHeight) * window.innerHeight + window.innerHeight - 50)
        })
    }

    // Array Practice with Songs
    var songInput = document.getElementById("song-input")
    var addSongsButton = document.getElementById("add-songs")
    addSongsButton.addEventListener('click', function(event) {
        eval(songInput.value)
        if (songs) {
            var songList = document.getElementById("song-list")
            while (songList.firstChild) {
                songList.removeChild(songList.firstChild)
            }
            songs.forEach((song, index) => {
                var li = document.createElement("li")
                li.innerText = index + 1 + ". " + song;
                songList.appendChild(li)
            })
        }
    })

    // Object Practice with Profiles
    var profileInput = document.getElementById("profile-input")
    var addProfileButton = document.getElementById("add-profile")
    addProfileButton.addEventListener('click', function(event) {
        eval(profileInput.value)
        if (profile) {
            var profileList = document.getElementById("profile-list")
            while (profileList.firstChild) {
                profileList.removeChild(profileList.firstChild)
            }
            for (var key in profile) {
                var li = document.createElement("li")
                li.innerText = key + ": " + profile[key];
                profileList.appendChild(li)
            }
        }
    })
})

function sampleDebugging() {
    debugger;
    var count = 0;
    var nums = [1, 2, 3, 4, 5, 6];
    for (var i = 0; i < nums.length - 1; i++) {
        count++;
        nums[i] = nums[i] + nums[i + 1]
    }
}
// Uncomment the line below to see the debugger in action.
// sampleDebugging()