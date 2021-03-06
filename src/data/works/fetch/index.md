---
title: Fetch
tags: ['Swift', 'SwiftUI', 'FireBase', 'UIKit']
category: full-stack
image: './cover.png'
date: "2021-03-09T12:00:00.000Z"
description: "Fetch: a Tinder clone for dog playdates."
---

![fetch deck](./deck.png "fetch deck")

<br>

# Fetch: The Tinder for Doggy Playdates


The purpose of this app is to act as the Tinder for doggy playdates. Owners will download Fetch, make a profile, and from there, go through various doggy profiles to find the perfect match for their own beloved pup to play with, whenever and wherever.


Owners can describe their pet’s attributes like name, breed, birthday, sex, whether they are spayed or neutered, and size. Owners swipe through a deck to confirm or reject a dog to receive matches. After matching with another dog, the owner can contact their match to set up a playdate.


NOTE: The camera functionality within the profile page works. However, in order to view the functionality, you must test it within an actual iphone rather than the simulator. 



# Authors:

CIS 422 @ University of Oregon  
Team: Fetch   
Ronny Fuentes, Kyra Novitzky, Jack Sanders, Stephanie Schofield, Callista West  

Last Modified March 12, 2021



## Technologies

![fetch stack](./stack.png "fetch stack")

* Swift/SwiftUI

* FireBase

* UIKit 



## Requirements


* Xcode 12.4

* iOS 14.4+

* CocoaPods

## Installation


#### Xcode 12.4 (mac)


This environment must be installed in order to run Fetch. The download can be found at [Xcode 12](https://developer.apple.com/xcode/)


#### iOS 14.4+


This application has not yet been deployed, but devices must be on version 14.4+ at the minimum in order to run this app.


#### CocoaPods


The Fetch project relies on dependencies through a Podfile. Therefore, CocoaPods must be installed on your local machine, which can be found at [CocoaPods](https://cocoapods.org). 


Pull the repo:
```
"git pull "https://github.com/JackSanders1998/CIS422Proj2/tree/main/Fetch"
```

After the Fetch project is pulled, and CocoaPods is installed, open `terminal` and navigate to where the `Fetch` folder is located. Go into the Fetch folder and run:  
```
pod deintegrate
pod install  
```  

A list of Firebase dependencies should be installed.


While still in the Fetch folder (in terminal) run:  
`open Fetch.xcworkspace`  

This should open the workspace file in Xcode.  

Note: A warning on the left panel will appear 
```
click "update to recommened settings"
click "Perform Changes"
close Xcode
run: open Fetch.xcworkspace
```

#### Running The Simulator  
`XCode > Product > Run`


# Team

![fetch team](./team.png "fetch team")

### Contributors

Ronny Fuentes <ronnyf@uregon.edu>  
Kyra Novitzky <knovitzk@uoregon.edu>  
Jack Sanders <jsanders5@uoregon.edu>  
Stephanie Schofield <sschofie@uoregon.edu>  
Callista West <Cwest10@uoregon.edu>  