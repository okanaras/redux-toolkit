### React + Vite

1.  Install `NPM` dependencies.

        npm install

2.  The below command will compile all the assets(sass, js, media) to public folder:

        npm run dev

### Redux Toolkit Kullanimi : `[Doc](https://redux-toolkit.js.org/tutorials/quick-start)`

1. Ilk olarak 2 npm paketini kuruyoruz

   1. npm install @reduxjs/toolkit
   2. npm install react-redux
      `npm install @reduxjs/toolkit react-redux` : seklinde tek seferde de kurulabilinir.

2. Redux Store Olusturulmasi gerek

   1. src/ altina `redux/store.jsx` componentini olustur. ve icerisine configureStore fonksiyonunu yaz
      `import { configureStore } from '@reduxjs/toolkit'`
      `export const store = configureStore({`
      `reducer: {},`
      `})`

3. Olusturulan Store'u main.jsx'teki <App/> componentine Provider olarak sarmak gerek. Bunun icin provider ve olusturulan store un import edilmesi gerek. `<Provider store={store}><App /></Provider>,`

   1. `import { store } from './app/store'`
      `import { Provider } from 'react-redux'`
      `ReactDOM.render(`
      `<Provider store={store}>`
      `<App />`
      `</Provider>,`
      `document.getElementById('root')`
      `)`

4. Slice olusturulmasi gerek. Bunun icin `src/redux/counterSlice.jsx` componentini olusturuyoruz. Import ediyoruz, initialState tanimliyoruz. createSlice fonksiyonunda name,initialState,reducers ve http istekleri icin extraReducers lari yaziyoruz. Son olarak reducers icindeki fonksiyonlari ve state'leri export ediyoruz. Burada `reducers` taki func larin ilk parametresi state initialStae i temsil ediyor. `state.propertyAdi` ile erisiriz

   1. `import { createSlice } from '@reduxjs/toolkit'`
      `const initialState = {`
      `  value: 0,`
      `}`

      `export const counterSlice = createSlice({`
      `  name: 'counter',`
      `  initialState,`
      `  reducers: {`
      `    increment: (state) => {`
      `      state.value += 1`
      `    },`
      `    decrement: (state) => {`
      `      state.value -= 1`
      `    },`
      `    incrementByAmount: (state, action) => {`
      `      state.value += action.payload`
      `    },`
      `  },`
      `})`

      `// Action creators are generated for each case reducer function`
      `export const { increment, decrement, incrementByAmount || "NOT: Buraya reducerstaki fonksiyon adlari yaziliyor" } = counterSlice.actions`

      `export default counterSlice.reducer`

5. Olusturulan Slice'in store.jsx teki configureStore fonksiyonuna reducer altina eklenmesi gerek eklenmesi gerek

   1. `import { configureStore } from '@reduxjs/toolkit'`
      `import counterReducer from '../features/counter/counterSlice'`

      `export const store = configureStore({`
      `reducer: {`
      `counter: counterReducer,`
      `},`
      `})`

6. useSeletor hooks'u ile initialState altindaki state'lere erisilir. App.jsx te useSelector ile store'da reducer icindeki counter degerini(bu ornekte value:25) i aldik. Burada object destructing ile direkt degere(25) de erisebiliriz

   1. ` import { useSelector } from 'react-redux'`
      `const state = useSelector((store) => store.counter)`
      Burada useSelectore'da store u cekip altindaki slicelari cekiyoruz

7. useDispatch hooks'u ile slice'taki fonksiyonlara erisiriz. App.jsx te import ediyoruz. daha sonra kendisini bir degiskene atyioruz. Atadigimiz degikeni ise callback ile cagirip iligi fonk cagiriyuoruz
   1. `import { useSelector, useDispatch } from 'react-redux'`
      `const dispatch = useDispatch();`
      `<button onClick={() => dispatch(decrement())}>Azalt</button>`
      `<button onClick={() => dispatch(increment())}>Arttir</button>`
      Burada yukardaki degiskeni cagiriyoruz daha sonra icerisine fonksiyonu cagiriyirouz. Buradaki fonksiyonlari import etmek gereklidir. <<- burada () parantezleri unutmuyoruz: dispatch(decrement()) ->>
      `import { decrement, increment } from './redux/counterSlice';`
