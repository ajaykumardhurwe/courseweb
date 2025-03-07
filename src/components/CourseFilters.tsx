import React from 'react';
import { Search, Filter } from 'lucide-react';

interface CourseFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  onSearch,
  onCategoryChange,
  onLevelChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 md:flex-initial">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>

          <div className="flex-1 md:flex-initial">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              onChange={(e) => onLevelChange(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};