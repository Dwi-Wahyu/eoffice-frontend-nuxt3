# Step By Step

```
mkdir eoffice-runner && cd eoffice-runner
```

```
curl -o actions-runner-linux-x64-2.321.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.321.0/actions-runner-linux-x64-2.321.0.tar.gz
```

```
echo "ba46ba7ce3a4d7236b16fbe44419fb453bc08f866b24f04d549ec89f1722a29e  actions-runner-linux-x64-2.321.0.tar.gz" | shasum -a 256 -c
```

```
tar xzf ./actions-runner-linux-x64-2.321.0.tar.gz
```

```
./config.sh --url https://github.com/Dwi-Wahyu/eoffice-frontend-nuxt3 --token AXJ7H5VXD7SOY33JCI4MEW3HS2HIU
```

```
pm2 start "./run.sh" --name eoffice-runner
```
