import React from 'react';
import { Container } from 'reactstrap';

export default function Layout({ children }) {
    return (
        <div>
            <nav className="flex-row-between"></nav>
            <main>
               <Container>
                    {children}
                </Container>
            </main>
      </div>
    );
}
