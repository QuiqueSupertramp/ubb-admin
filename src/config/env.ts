export const ENV: { [key: string]: string } = {
  ...Object.keys(import.meta.env)
    .filter((k) => k.includes('VITE_'))
    .reduce(
      (acc, curr) =>
        Object.assign(acc, {
          [curr.replace('VITE_', '')]: import.meta.env[curr],
        }),
      {},
    ),
}
