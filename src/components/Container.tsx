import React from 'react';

interface Props {
  children: React.ReactNode
} 
const Container: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex min-w-screen max-h-screen m-8">
      {children}
    </div>
  )
}

export default Container;