# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.


## Prisma

```sh
npm install --save-dev prisma
npx prisma init --datasource-provider sqlite
npx prisma db push
npx prisma studio
```

## Tailwind

```sh
npm install --save-dev tailwindcss postcss autoprefixer concurrently
npx tailwindcss init -p
```

## Validation

```sh
npm install --save zod
```

## PlanetScale

Get [scoop](https://scoop.sh/) first
```sh
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

Install pscale CLI
```sh
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale
pscale auth login
pscale database create <database-name>
pscale branch create <database-name> <branch-name>
pscale connect <database-name> <branch-name> --port 3309
pscale branch switch main --database <database-name>
```

After switching branch, restart everything.