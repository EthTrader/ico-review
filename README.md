# EthTrader ICO Community Review

Following [a post](https://www.reddit.com/r/ethtrader/comments/6o2duw/eth_trader_ico_rating_service_criterion_what/) on the [EthTrader subreddit](https://www.reddit.com/r/ethtrader/) a community effort was established to crowdsource a set of criteria for evaluating ICOs. Work moved to this repo after stablising from an [initial working doc](https://docs.google.com/document/d/1oWqyVMKQ0-oAJPxNLAWiclqkHHH3TRV_J4dLI6zu6tQ).


## How to

#### Create a new ICO Review Form

Start a new google spreadsheet and name it the same as the ICO you want to review, eg. 0x. Then go to `Tools > Script editor` and paste in the contents of [the `makeForm.gs` script](makeForm.gs). Run the script and you will have auto-created a new google form which you can share on [EthTrader](https://www.reddit.com/r/ethtrader/) to request reviews of the ICO.

#### Contribute

Any and all suggestions on phrasing, weighting/multipliers, missing or extraneous criteria, are welcome. These can be made in this repo or in project [slack](https://icoreview.slack.com).

[Join us on Slack](https://icoreview.slack.com)

## About the criteria

Each criteria has an associated multiplier which is a suggestion for it's relative importance. The set of criteria is intended to form the basis for crowdsourced reviews by EthTrader users. Scores from users who submitted reviews would be weighted using the multiplier and then aggregated to establish a community review score. A test review was [requested](https://www.reddit.com/r/ethtrader/comments/6tg8up/ethtrader_ico_review_for_project_0x_the_form/) and [completed](https://www.reddit.com/r/ethtrader/comments/6to94g/project_0x_ethtrader_ico_review/) for the 0x token sale.

Criteria can be tagged as `flaggable` and currently 2 criteria are: **Token utility** & **Security**. These criteria require special consideration and must pass a threshold (3.5/5) for the overall review score to not be flagged with a warning. While otherwise scoring well, out of 47 respondents for the 0x review the average score for **Token utility** was 3.2.
