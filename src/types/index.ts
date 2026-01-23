import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Obituary {
  id: string;
  name: string;
  date: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}