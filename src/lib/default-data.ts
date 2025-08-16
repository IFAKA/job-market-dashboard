import { JobMarketData } from '@/types/job';

const HISTORY_STORAGE_KEY = 'job-market-upload-history';
const DATA_STORAGE_KEY = 'job-market-data-';
const CURRENT_DATA_ID_KEY = 'job-market-current-data-id';
const DEFAULT_DATA_ID = 'default-data';

export interface HistoryItem {
  id: string;
  fileName: string;
  fileType: 'txt' | 'csv' | 'default';
  uploadDate: Date;
  jobCount: number;
  isCurrent: boolean;
}

export function initializeDefaultData(jobMarketData: JobMarketData): void {
  if (typeof window === 'undefined') return;

  // Check if default data is already in history
  const history = getHistory();
  const defaultExists = history.some(item => item.id === DEFAULT_DATA_ID);

  // Add country to jobs if not present (default to argentina for existing data)
  const jobsWithCountry = jobMarketData.jobs.map(job => ({
    ...job,
    country: job.country || 'argentina'
  }));

  const updatedJobMarketData = {
    ...jobMarketData,
    jobs: jobsWithCountry
  };

  // Always save/update default data to localStorage
  localStorage.setItem(DATA_STORAGE_KEY + DEFAULT_DATA_ID, JSON.stringify(updatedJobMarketData));

  if (!defaultExists) {
    // Add to history if it doesn't exist
    const defaultHistoryItem: HistoryItem = {
      id: DEFAULT_DATA_ID,
      fileName: 'Remote Trainee Argentinian Jobs',
      fileType: 'default',
      uploadDate: new Date(),
      jobCount: updatedJobMarketData.jobs.length,
      isCurrent: false // Don't force it as current
    };

    const updatedHistory = [defaultHistoryItem, ...history];
    const trimmedHistory = updatedHistory.slice(0, 10); // Keep only 10 items
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(trimmedHistory));

    // Set as current data if no current data is set
    if (!localStorage.getItem(CURRENT_DATA_ID_KEY)) {
      localStorage.setItem(CURRENT_DATA_ID_KEY, DEFAULT_DATA_ID);
      // Mark as current in history
      const finalHistory = trimmedHistory.map(item => ({
        ...item,
        isCurrent: item.id === DEFAULT_DATA_ID
      }));
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(finalHistory));
    }
  } else {
    // Update the job count in history if it already exists
    const updatedHistory = history.map(item => 
      item.id === DEFAULT_DATA_ID 
        ? { ...item, jobCount: updatedJobMarketData.jobs.length }
        : item
    );
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updatedHistory));
  }
}

export function getHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const history = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!history) return [];
    
    const parsedHistory = JSON.parse(history);
    
    // Convert uploadDate strings back to Date objects
    return parsedHistory.map((item: any) => {
      let uploadDate: Date;
      try {
        uploadDate = new Date(item.uploadDate);
        // If the date is invalid, use current date as fallback
        if (isNaN(uploadDate.getTime())) {
          uploadDate = new Date();
        }
      } catch (error) {
        console.error('Error parsing date for item:', item.id, error);
        uploadDate = new Date();
      }
      
      return {
        ...item,
        uploadDate
      };
    });
  } catch (error) {
    console.error('Error parsing history:', error);
    return [];
  }
}

export function saveHistory(history: HistoryItem[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving history:', error);
  }
}

export function getCurrentDataId(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CURRENT_DATA_ID_KEY);
}

export function setCurrentDataId(id: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENT_DATA_ID_KEY, id);
}

export function getDataById(id: string): JobMarketData | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const data = localStorage.getItem(DATA_STORAGE_KEY + id);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error parsing data:', error);
    return null;
  }
}

export function saveDataById(id: string, data: JobMarketData): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(DATA_STORAGE_KEY + id, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

export function removeDataById(id: string): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(DATA_STORAGE_KEY + id);
}

export function ensureCurrentDataInHistory(): void {
  if (typeof window === 'undefined') return;
  
  const currentDataId = getCurrentDataId();
  const history = getHistory();
  
  if (currentDataId) {
    // Update history to mark the current item as current
    const updatedHistory = history.map(item => ({
      ...item,
      isCurrent: item.id === currentDataId
    }));
    saveHistory(updatedHistory);
  }
}
