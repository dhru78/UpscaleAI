# Supabase Setup Guide

## Environment Variables

Create a `.env` file in your project root with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Database Setup

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create the image_history table
CREATE TABLE image_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL, -- Clerk user ID
  original_image_url TEXT NOT NULL,
  enhanced_image_url TEXT NOT NULL,
  image_type TEXT NOT NULL CHECK (image_type IN ('xray', 'normal')),
  file_name TEXT NOT NULL,
  file_size INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_image_history_user_id ON image_history(user_id);
CREATE INDEX idx_image_history_created_at ON image_history(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE image_history ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own images" ON image_history
  FOR SELECT USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert their own images" ON image_history
  FOR INSERT WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own images" ON image_history
  FOR UPDATE USING (auth.uid()::text = user_id);

CREATE POLICY "Users can delete their own images" ON image_history
  FOR DELETE USING (auth.uid()::text = user_id);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_image_history_updated_at 
  BEFORE UPDATE ON image_history 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## Storage Setup

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `image-history`
3. Set the bucket to public

### Storage RLS Policies

```sql
-- Allow users to upload images
CREATE POLICY "Users can upload images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'image-history' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Allow users to view their own images
CREATE POLICY "Users can view their own images" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'image-history' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Allow users to delete their own images
CREATE POLICY "Users can delete their own images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'image-history' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
```

## Features Implemented

✅ **Real Image History**: Images are stored in Supabase Storage and metadata in PostgreSQL
✅ **User Authentication**: Each user can only see their own images
✅ **Image Type Support**: Both X-ray and normal images are supported
✅ **Delete Functionality**: Users can delete their images from both storage and database
✅ **Loading States**: Proper loading indicators for all operations
✅ **Error Handling**: Comprehensive error handling with user feedback
✅ **Image Type Indicators**: Visual indicators showing X-ray vs normal images
✅ **Automatic Sync**: Images are automatically saved when enhanced
