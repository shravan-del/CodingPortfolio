'use client';

import React, { useEffect, useState } from 'react';
import { Profile } from '@/components/github/Profile';
import { Repositories } from '@/components/github/Repositories';
import { ActivityFeed } from '@/components/github/ActivityFeed';

export default function GitHubPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">GitHub Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Profile />
        </div>
        <div className="lg:col-span-2 space-y-8">
          <Repositories />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
} 