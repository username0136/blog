# Signing builds

we've integrated the inline signing implementation from YAAP (thanks to Ido and John), so your builds will be signed automatically. You just need to generate the private keys and place them in vendor/aosp/signing/keys/.

## Generating the keys

::: info NOTE
You only need to run this once. If you ever rerun these, you’ll need to migrate between builds
:::

```bash
subject='/C=US/ST=State/L=City/O=Android/OU=Android/CN=Android/emailAddress=email@example.com'
for x in releasekey platform shared media networkstack nfc verity otakey testkey sdk_sandbox bluetooth; do \
    ./development/tools/make_key vendor/aosp/signing/keys/$x "$subject"; \
done
```

where:

C: Country code (e.g., US)  
ST: State name  
L: City name  
O: Organization name  
OU: Organizational Unit name  
CN: Common name  
emailAddress: Your email address
