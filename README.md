# tweet-analyzer

## Usage

```
npm i
node index <twitter_screen_name>
```

- Create `config.json`

```json
{
  "consumer_key": "",
  "consumer_secret": "",
  "access_token_key": "",
  "access_token_secret": ""
}
```

## メモ

- API から投稿時間のみ集計
- 曜日、30 分単位の時間、祝日判定
