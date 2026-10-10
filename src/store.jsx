import { createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from 'react'
import { products } from './data.js'

const Ctx = createContext(null)

const load = (k, d) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch { return d }
}
const save = (k, v) => {
  try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* ignore */ }
}

function cartReducer(state, a) {
  switch (a.type) {
    case 'add': {
      const f = state.find((i) => i.id === a.id)
      return f ? state.map((i) => (i.id === a.id ? { ...i, qty: i.qty + 1 } : i)) : [...state, { id: a.id, qty: 1 }]
    }
    case 'inc': return state.map((i) => (i.id === a.id ? { ...i, qty: i.qty + 1 } : i))
    case 'dec': return state.flatMap((i) => (i.id === a.id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i]))
    case 'remove': return state.filter((i) => i.id !== a.id)
    case 'clear': return []
    default: return state
  }
}

export function AppProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, () => load('qu-cart', []))
  const [user, setUser] = useState(() => load('qu-user', null))
  const [panel, setPanel] = useState(null) // 'cart' | 'search' | 'auth' | null
  const [toast, setToast] = useState('')
  const timer = useRef(0)

  useEffect(() => save('qu-cart', cart), [cart])
  useEffect(() => save('qu-user', user), [user])
  useEffect(() => {
    document.body.style.overflow = panel ? 'hidden' : ''
  }, [panel])

  const notify = useCallback((m) => {
    setToast(m)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 2400)
  }, [])

  const addToCart = useCallback((id) => {
    dispatch({ type: 'add', id })
    const p = products.find((x) => x.id === id)
    notify(`${p.name} savatga qo'shildi`)
  }, [notify])

  const count = cart.reduce((s, i) => s + i.qty, 0)
  const total = cart.reduce((s, i) => s + i.qty * products.find((p) => p.id === i.id).price, 0)

  return (
    <Ctx.Provider value={{ cart, dispatch, addToCart, count, total, user, setUser, panel, setPanel, toast, notify }}>
      {children}
    </Ctx.Provider>
  )
}

export const useApp = () => useContext(Ctx)
