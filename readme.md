# Vite vs Rsbuild (JSX with React)

Compare bundle and unbundle mechanisms




<img width="723" alt="image" src="https://github.com/yArna/vite-vs-x/assets/82231420/85103e2a-ed4f-43d2-9e7a-29b6d862d74c">


## Page Reload (ms)



| modules | Vite(5.0.4) | Rsbuild(0.1.7) |
| ------- | ----------- | -------------- |
| 50      | 99.00       | 32.40          |
| 100     | 131.10      | 32.7           |
| 500     | 718.40      | 52.10          |
| 1000    | 1451.40     | 156.80         |
| 1500    | 2541.90     | 233.30         |
| 3000    | 4657.80     | 473.80         |

> Device: MacBook Pro 2019 Intel Core i5  2.4 GHz 16GB
> Chrome 119.0
 
**Related:**
- [Page reload very slow, unbundle DX for large web app is not satisfactory](https://github.com/vitejs/vite/discussions/13697#discussioncomment-7728820)
- [Controversy between Unbundle and Bundled - X](https://x.com/FarSideOfMoonvy/status/1730890277953712312?s=20)
