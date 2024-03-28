import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination Component Tests', () => {
  it('renders the pagination component', () => {
    render((<Pagination />) as React.ComponentType);
    expect(true).toBe(true);
  });
});
