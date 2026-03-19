import { describe, it, expect } from 'vitest'
import { quarters, useQuarter } from '~/composables/useQuarters'

describe('Quarter data', () => {
  it('has exactly 10 quarters', () => {
    expect(quarters).toHaveLength(10)
  })

  it('all quarters have required fields', () => {
    for (const q of quarters) {
      expect(q.number).toBeTruthy()
      expect(q.name).toBeTruthy()
      expect(q.slug).toBeTruthy()
      expect(q.type).toBeTruthy()
      expect(q.description).toBeTruthy()
      expect(q.image).toBeTruthy()
      expect(q.longDescription).toBeTruthy()
      expect(q.pullQuote).toBeTruthy()
      expect(q.offerings).toBeInstanceOf(Array)
      expect(q.offerings.length).toBeGreaterThanOrEqual(1)
      expect(['development', 'coming-soon', 'active']).toContain(q.status)
    }
  })

  it('all slugs are unique', () => {
    const slugs = quarters.map(q => q.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('all numbers are sequential from 01 to 10', () => {
    quarters.forEach((q, i) => {
      expect(q.number).toBe(String(i + 1).padStart(2, '0'))
    })
  })

  it('useQuarter returns correct quarter by slug', () => {
    const result = useQuarter('voight-studio')
    expect(result).not.toBeNull()
    expect(result!.name).toBe('Voight Studio')
  })

  it('useQuarter returns null for invalid slug', () => {
    expect(useQuarter('nonexistent')).toBeNull()
  })
})

describe('Email validation', () => {
  // Test the regex pattern used in useEmailCollection
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  it('accepts valid emails', () => {
    expect(emailRegex.test('test@example.com')).toBe(true)
    expect(emailRegex.test('user.name@domain.co.uk')).toBe(true)
    expect(emailRegex.test('a@b.c')).toBe(true)
  })

  it('rejects invalid emails', () => {
    expect(emailRegex.test('')).toBe(false)
    expect(emailRegex.test('notanemail')).toBe(false)
    expect(emailRegex.test('@nodomain')).toBe(false)
    expect(emailRegex.test('spaces in@email.com')).toBe(false)
  })
})
