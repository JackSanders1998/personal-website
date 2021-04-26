---
title: NBA Outside the Box
tags: ['NBA', 'Stats', 'Python3', 'R', 'APIs']
category: statistics
image: './court.jpg'
date: "2021-03-20T12:00:00.000Z"
description: "My thoughts about the NBA in blog format informed by stats."
---

<br>

# What is Outside the Box?

[Outside the Box](https://www.thejacksanders.com/nba/) is where I keep my NBA-related thoughts.
---
<br>


## I am eager to include more posts on this blog, but right now you can find some fun content like this:

[At what age to NBA players score the most points?](https://www.thejacksanders.com/nba-age-pts/)
![fig1-1](./fig1-1.png "fig1-1")

[What NBA players have the best +/- box score?](https://www.thejacksanders.com/nba-age-pts/)
![fig2-1](./fig2-1.png "fig2-1")

[What NBA teams have the largest height difference between players?](https://www.thejacksanders.com/nba-height-diff/)
![hist2](./hist2.png "hist2")

# And, you can find more serious content about querying and visualizaing data like this:

<pre>
def display_data():
    master_list = []
    for team in Teams():
        print('=' * 80)
        print(team.name)
        team_heights = {}
        for player in team.roster.players:
            height = get_height_in_inches(player.height)
            team_heights[player.name] = height
        height_diff = print_players(team_heights)
        master_list.append([team.name, height_diff])
    print(master_list)
    return master_list
</pre>

<pre>
theme_set(theme_minimal())
ggplot(s2017, aes(x=net_rating, y=player_name, col = ifelse(net_rating > avg,'above average','below average'))) +
  geom_point() + 
  geom_smooth(method=lm, se=FALSE) +
  theme(legend.position="right") + 
  labs(subtitle="Net (+/-) of NBA players scoring more than 20 points per game", 
       y="Player Name", 
       x="Net Rating (+/-)",
       col="Avg rating ~= 4.4",
       title="Scatterplot", 
       caption = "Source: nba")
</pre>