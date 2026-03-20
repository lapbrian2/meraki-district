import { describe, it, expect } from 'vitest'
import { districts, useDistrict } from '~/composables/useDistricts'

describe('District data', () => {
  it('has exactly 11 districts', () => {
    expect(districts).toHaveLength(11)
  })

  it('all districts have required fields', () => {
    for (const d of districts) {
      expect(d.number).toBeTruthy()
      expect(d.name).toBeTruthy()
      expect(d.slug).toBeTruthy()
      expect(d.type).toBeTruthy()
      expect(d.description).toBeTruthy()
      expect(d.image).toBeTruthy()
      expect(d.longDescription).toBeTruthy()
      expect(d.pullQuote).toBeTruthy()
      expect(d.offerings).toBeInstanceOf(Array)
      expect(d.offerings.length).toBeGreaterThanOrEqual(1)
      expect(['development', 'coming-soon', 'active']).toContain(d.status)
    }
  })

  it('all slugs are unique', () => {
    const slugs = districts.map(d => d.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('all numbers are sequential from 01 to 11', () => {
    districts.forEach((d, i) => {
      expect(d.number).toBe(String(i + 1).padStart(2, '0'))
    })
  })

  it('all image paths end in .webp', () => {
    for (const d of districts) {
      expect(d.image).toMatch(/\.webp$/)
    }
  })

  it('all slugs are URL-safe', () => {
    for (const d of districts) {
      expect(d.slug).toMatch(/^[a-z0-9-]+$/)
    }
  })

  it('all layouts are valid', () => {
    const validLayouts = ['hero', 'wide', 'narrow', 'half', 'closer']
    for (const d of districts) {
      expect(validLayouts).toContain(d.layout)
    }
  })

  it('all districts have exactly 4 offerings', () => {
    for (const d of districts) {
      expect(d.offerings).toHaveLength(4)
    }
  })

  it('useDistrict returns correct district by slug', () => {
    const result = useDistrict('voight-studio')
    expect(result).not.toBeNull()
    expect(result!.name).toBe('Voight Studio')
  })

  it('useDistrict returns null for invalid slug', () => {
    expect(useDistrict('nonexistent')).toBeNull()
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
