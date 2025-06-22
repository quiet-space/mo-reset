import { put, del, list, head } from '@vercel/blob';

// Vercel Blob 설정
const BLOB_READ_WRITE_TOKEN = import.meta.env.VITE_BLOB_READ_WRITE_TOKEN || '';

// 파일 업로드 함수
export const uploadToBlob = async (file: File, filename?: string): Promise<string> => {
  try {
    const blob = await put(filename || file.name, file, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
    });
    return blob.url;
  } catch (error) {
    console.error('Blob 업로드 실패:', error);
    throw error;
  }
};

// 파일 삭제 함수
export const deleteFromBlob = async (url: string): Promise<void> => {
  try {
    await del(url, { token: BLOB_READ_WRITE_TOKEN });
  } catch (error) {
    console.error('Blob 삭제 실패:', error);
    throw error;
  }
};

// Blob에서 파일 목록 가져오기
export const listBlobFiles = async (prefix?: string) => {
  try {
    const { blobs } = await list({ 
      token: BLOB_READ_WRITE_TOKEN,
      prefix 
    });
    return blobs;
  } catch (error) {
    console.error('Blob 목록 조회 실패:', error);
    throw error;
  }
};

// 파일 정보 가져오기
export const getBlobInfo = async (url: string) => {
  try {
    const info = await head(url, { token: BLOB_READ_WRITE_TOKEN });
    return info;
  } catch (error) {
    console.error('Blob 정보 조회 실패:', error);
    throw error;
  }
};

// 비디오 파일인지 확인하는 함수
export const isVideoFile = (filename: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

// 이미지 파일인지 확인하는 함수
export const isImageFile = (filename: string): boolean => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

// Blob URL에서 파일 다운로드
export const downloadFromBlob = async (url: string, filename?: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Blob 다운로드 실패:', error);
    throw error;
  }
};

// Vercel Blob에서 비디오 스트리밍을 위한 헤더 설정 (프록시 서버 사용)
export const getVideoWithHeaders = async (url: string) => {
  try {
    // Vercel Blob URL에서 파일명 추출
    const filename = url.split('/').pop();
    const proxyUrl = `http://localhost:3001/api/video/${filename}`;

    console.log('Fetching video through proxy:', proxyUrl);

    const response = await fetch(proxyUrl, {
      method: 'GET',
      mode: 'cors',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.blob();
  } catch (error) {
    console.error('비디오 스트리밍 실패:', error);
    throw error;
  }
};

// Vercel Blob URL 생성 헬퍼 함수
export const createBlobUrl = (storeId: string, filename: string): string => {
  return `https://${storeId}.vercel-storage.com/${filename}`;
}; 