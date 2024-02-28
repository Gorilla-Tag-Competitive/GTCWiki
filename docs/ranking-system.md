# How does ScoreSaber and the PP system work?

## Earning PP
PP is in return awarded to players for submitting a score on ranked maps,. To prevent skilled players from grinding hundreds of easier maps worth less PP to rank up, a curve is applied to your plays. This curve is available below, it shows the percentage of points you get relative to the assigned PP value of a map based on your performance on said map.

ScoreSaber calculates your total PP, which you can see next to your ScoreSaber profile, based on a weighted total of all your ranked map completions. Your highest PP play will give 100% of the PP earned from the play, but every play after that is weighted at a percentage 5% lower than the play above it. The weighting is `0.965^(n-1)`, where `n` is the ranking of a specific play amongst all your PP plays. A new play will give PP at the weight based on its position in your ranked plays, but it also pushes down the weighting of play below it. That is why your PP gains for completing ranked maps don’t necessarily sum up with the numbers shown in your profile.

![PP Curve](~@images/ranking/pp-curve.png)

### Global Ranking
A global rank will be assigned to your profile. This rank is based on comparing the total amount of pp earned to every other player from all the active players around the globe.

### Country Ranking
A country rank is assigned to your profile based on your location at the moment of setting your first score. This rank, just like your global rank, is based on comparing the total amount of pp earned to every other active player from your country.

## Ranking process
The [Ranking Team](./ranking/scoresaber-team-information.md#ranking-team-rt) ranks maps through a communal evaluation process. A map is first chosen by a team member to be checked; if the map seems to meet everything from the [ranking criteria](/ranking/criteria/), it is then added to the [ranking-queue](./ranking/ranking-queue-rules.md) and will eventually reach the top of said queue until it is qualified with 3 upvotes. Once the map is qualified by the Nomination Assessment Team, a timer of 7 days is started for players to give feedback to the mapper. Finally, when the 7 day timer comes to an end, the map will be approved, and ranked.

When a map is ranked, it is then assigned a Performance Points (commonly referred to as *PP*) value based on an algorithm which determines the difficulty of said map, this is based of a variety of factors.

### Unranking process
There isn't and will not be any unranking process on ScoreSaber. If you're curious as to why, please refer to this question in our [FAQ](./faq.md#why-can-a-map-not-be-unranked). Currently, the only way maps could ever become unranked is if the mapper is banned from ScoreSaber. You can be banned for various reasons such has repeatedly breaking our [rules](./rules.md), or making one of your ranked map unavailable to everyone. Since ScoreSaber does not support sharing custom maps between each-other, we rely on the availability of said map from the creator only.

:::tip For any question that was not answered on this page please refer to our
 [FAQ](./faq.md)
