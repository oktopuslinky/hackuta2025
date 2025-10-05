import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadPopupProps {
  onClose: () => void;
  onFilesUpload: (files: File[]) => void;
}

const FileUploadPopup: React.FC<FileUploadPopupProps> = ({ onClose, onFilesUpload }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (fileName: string) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleUpload = () => {
    onFilesUpload(files);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }}>
      <div style={{
        background: 'rgba(23, 23, 23, 0.9)',
        borderRadius: '24px',
        padding: '32px',
        width: '100%',
        maxWidth: '500px',
        border: '1px solid rgba(82, 82, 82, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fb923c' }}>Upload Files</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div {...getRootProps()} style={{
          marginTop: '24px',
          border: `2px dashed ${isDragActive ? '#f97316' : 'rgba(82, 82, 82, 0.5)'}`,
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'border-color 0.3s'
        }}>
          <input {...getInputProps()} />
          <p style={{ color: '#a1a1aa' }}>
            {isDragActive ? 'Drop the files here...' : "Drag 'n' drop some files here, or click to select files"}
          </p>
        </div>

        {files.length > 0 && (
          <div style={{ marginTop: '24px', maxHeight: '200px', overflowY: 'auto' }}>
            {files.map(file => (
              <div key={file.name} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(64, 64, 64, 0.3)',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '14px' }}>{file.name}</span>
                <button onClick={() => removeFile(file.name)} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} style={{
            padding: '10px 20px',
            borderRadius: '9999px',
            background: 'rgba(64, 64, 64, 0.5)',
            color: '#d4d4d8',
            border: '1px solid rgba(82, 82, 82, 0.3)',
            cursor: 'pointer'
          }}>
            Cancel
          </button>
          <button onClick={handleUpload} disabled={files.length === 0} style={{
            padding: '10px 20px',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #f97316, #ea580c)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            opacity: files.length === 0 ? 0.5 : 1
          }}>
            Upload {files.length} {files.length === 1 ? 'File' : 'Files'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPopup;