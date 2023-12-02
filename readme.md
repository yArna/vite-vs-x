# Vite vs Rsbuild (JSX with React)

Compare bundle and unbundle mechanisms

## Page Reload (ms)

| modules | Vite(5.0.4) | Rsbuild(0.1.7) |
| ------- | ----------- | -------------- |
| 50      | 99.00       | 32.40          |
| 100     | 131.10      | 32.7           |
| 500     | 718.40      | 52.10          |
| 1000    | 1451.40     | 156.80         |
| 1500    | 2541.90     | 233.30         |
| 3000    | 4657.80     | 473.80         |
