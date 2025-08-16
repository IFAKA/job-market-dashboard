# Internationalization (i18n) Features

This job market dashboard now supports both English and Spanish languages with automatic language detection and manual language switching.

## Features

### 🌐 Automatic Language Detection
- **Browser Language Detection**: The app automatically detects the user's browser language preference
- **Spanish Support**: If the browser language starts with "es", the app defaults to Spanish
- **English Fallback**: All other languages default to English
- **Persistent Storage**: User's language preference is saved in localStorage

### 🔄 Manual Language Switching
- **Language Switcher**: A globe icon button in the header allows users to toggle between English and Spanish
- **Real-time Updates**: All text content updates immediately when the language is changed
- **HTML Lang Attribute**: The document's `lang` attribute is automatically updated to match the selected language

### 📱 Responsive Design
- The language switcher is positioned in the header for easy access
- Works seamlessly across all screen sizes
- Maintains the app's existing responsive design

## Implementation Details

### File Structure
```
src/
├── lib/
│   └── i18n.ts                    # Translation keys and utilities
├── hooks/
│   └── useLanguage.ts             # Custom hook for language management
├── components/
│   ├── providers/
│   │   └── language-provider.tsx  # React context provider
│   └── ui/
│       └── language-switcher.tsx  # Language toggle component
```

### Key Components

#### 1. Language Provider (`src/components/providers/language-provider.tsx`)
- Wraps the entire application
- Manages language state using React Context
- Handles language detection and persistence
- Updates HTML lang attribute

#### 2. Language Hook (`src/hooks/useLanguage.ts`)
- Provides easy access to language state
- Handles client-side rendering safely
- Returns translation function and language state

#### 3. Language Switcher (`src/components/ui/language-switcher.tsx`)
- Simple toggle button with globe icon
- Shows current language and allows switching
- Handles hydration safely

#### 4. Translation System (`src/lib/i18n.ts`)
- Centralized translation keys
- Type-safe translation function
- Easy to add new languages in the future

### Usage Examples

#### Using Translations in Components
```tsx
import { useLanguageContext } from '@/components/providers/language-provider';
import { t } from '@/lib/i18n';

export function MyComponent() {
  const { language } = useLanguageContext();
  
  return (
    <div>
      <h1>{t('dashboard.title', language)}</h1>
      <p>{t('dashboard.subtitle', language)}</p>
    </div>
  );
}
```

#### Adding New Translation Keys
```tsx
// In src/lib/i18n.ts
export const translations: Translations = {
  'new.key': {
    en: 'English text',
    es: 'Texto en español'
  }
};
```

## Supported Languages

### English (en)
- Default language
- Used when browser language is not Spanish
- Fallback for missing translations

### Spanish (es)
- Triggered when browser language starts with "es"
- Complete translation coverage for all UI elements
- Proper Spanish grammar and terminology

## Translation Coverage

The following areas are fully translated:

### Dashboard
- ✅ Page title and subtitle
- ✅ Navigation buttons
- ✅ Metrics cards and descriptions
- ✅ Chart titles and labels
- ✅ Opportunity cards
- ✅ Recommendation sections
- ✅ Footer text

### Upload Page
- ✅ Page title and description
- ✅ File upload interface
- ✅ Error and success messages
- ✅ Navigation buttons
- ✅ File validation messages

### Components
- ✅ Language switcher
- ✅ File upload component
- ✅ History manager
- ✅ All UI components

## Browser Compatibility

- **Modern Browsers**: Full support for language detection and switching
- **Local Storage**: Used for persisting language preference
- **React Context**: Provides state management across components
- **SSR Safe**: Handles server-side rendering without hydration mismatches

## Future Enhancements

### Easy to Extend
The translation system is designed to easily add more languages:

1. Add new language code to the `Language` type
2. Add translations to the `translations` object
3. Update language detection logic if needed

### Potential Additions
- **More Languages**: Portuguese, French, etc.
- **RTL Support**: For languages like Arabic or Hebrew
- **Number Formatting**: Locale-specific number and date formatting
- **Currency Display**: Localized currency symbols and formatting

## Testing

### Manual Testing
1. Visit `/test` page to see language switching in action
2. Change browser language settings to test automatic detection
3. Use the language switcher to toggle between languages
4. Verify all text content updates correctly

### Automatic Detection Test
1. Set browser language to Spanish (es-ES, es-MX, etc.)
2. Refresh the page
3. Verify the app loads in Spanish automatically

### Persistence Test
1. Change language using the switcher
2. Refresh the page
3. Verify the selected language persists
