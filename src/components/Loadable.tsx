import React from 'react'

export function loadable<P extends Record<string, any> = {}>(Component: React.LazyExoticComponent<React.ComponentType<any>>, loading?: React.ReactNode) {
  const Suspense: React.FC<P> = (props) => (
    <React.Suspense fallback={loading}>
      <Component {...props} />
    </React.Suspense>
  )

  return Suspense
}
