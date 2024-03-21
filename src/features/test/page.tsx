'use client';

import { Column, Row, Youtube } from '@shared/index';
import React from 'react'
import useReg from './useReg';

export default function Test() {
  const [Reg, setStep] = useReg('a');

  
  return (
    <main>
      <Column name='a'>
        <Row onClick={() => setStep('a')}>
          <Youtube/>
        </Row>
      </Column>
      <Column name='b'>
        <Row onClick={() => setStep('b')}>
          <Youtube/>
        </Row>
      </Column>
    </main>
  )
}
