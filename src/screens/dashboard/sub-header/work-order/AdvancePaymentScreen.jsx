// import React from 'react';
//   import { View, Text } from 'react-native';

//   export default function AdvancePaymentScreen() {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <Text className="text-2xl font-bold text-gray-800">Bill of Quantity</Text>
//         <Text className="text-gray-600 mt-2">Manage your bill of quantities here.</Text>
//       </View>
//     );
//   }

import React, { useState, useCallback, useMemo } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  ActivityIndicator,
  TextInput,
  Modal
} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  FadeInDown, 
  FadeOut, 
  FadeInUp,
  SlideInRight
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const cardWidth = Math.min(screenWidth - 32, 600);

// Sample Advance Payment data based on the image content
const advancePaymentData = [
  {
    id: '1',
    workOrderNo: '#',
    paymentNo: 'GH101-APN-00007',
    vendor: 'ABC Constructions',
    amount: '1.00 K',
    refType: 'Letter of Intent',
    date: '2025-09-01',
    status: 'Approved'
  },
  {
    id: '2',
    workOrderNo: 'GH101-WO-00016',
    paymentNo: 'GH101-APN-00006',
    vendor: 'XYZ Suppliers',
    amount: '5.00 K',
    refType: 'Pre-Approval Note',
    date: '2025-09-04',
    status: 'Pending'
  },
  {
    id: '3',
    workOrderNo: 'GH101-WO-00018',
    paymentNo: 'GH101-APN-00005',
    vendor: 'DEF Builders',
    amount: '3.50 K',
    refType: 'Work Order',
    date: '2025-08-28',
    status: 'Approved'
  },
  {
    id: '4',
    workOrderNo: 'GH101-WO-00022',
    paymentNo: 'GH101-APN-00004',
    vendor: 'GHI Contractors',
    amount: '7.25 K',
    refType: 'Letter of Intent',
    date: '2025-08-20',
    status: 'Rejected'
  }
];

// Status Indicator Component
const StatusIndicator = ({ status }) => {
  const statusConfig = {
    'Pending': { color: '#f59e0b', bg: '#fef3c7', icon: 'clock-outline' },
    'Approved': { color: '#10b981', bg: '#d1fae5', icon: 'check-circle' },
    'Rejected': { color: '#ef4444', bg: '#fee2e2', icon: 'close-circle' },
  };

  const statusCfg = statusConfig[status] || statusConfig['Pending'];

  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      backgroundColor: statusCfg.bg,
      alignSelf: 'flex-start'
    }}>
      <Icon name={statusCfg.icon} size={14} color={statusCfg.color} style={{ marginRight: 4 }} />
      <Text style={{ 
        fontSize: 12, 
        fontWeight: '600', 
        color: statusCfg.color 
      }}>
        {status}
      </Text>
    </View>
  );
};

// Advance Payment Card Component
const AdvancePaymentCard = ({ item, expanded, onToggle }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500)}>
      <View style={{
        borderRadius: 16,
        backgroundColor: '#ffffff',
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}>
        {/* Header - Applying blue theme here */}
        <TouchableOpacity onPress={onToggle}>
          <LinearGradient 
            colors={['#e0f2fe', '#bae6fd']} // Light blue gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ padding: 20 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ 
                  fontSize: 16, 
                  fontWeight: '700', 
                  color: '#0369a1', // Darker blue for contrast
                  marginBottom: 4
                }}>
                  {item.paymentNo}
                </Text>
                <Text style={{ 
                  fontSize: 12, 
                  color: '#0284c7', // Medium blue
                  marginBottom: 4
                }}>
                  {item.vendor}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: '600', 
                  color: '#0369a1', // Darker blue for contrast
                  marginBottom: 4
                }}>
                  {item.amount}
                </Text>
                <StatusIndicator status={item.status} />
              </View>
              <Icon 
                name={expanded ? 'chevron-up' : 'chevron-down'} 
                size={24} 
                color="#0369a1" 
                style={{ marginLeft: 12 }} 
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Expanded Content */}
        {expanded && (
          <Animated.View entering={FadeInUp} exiting={FadeOut}>
            <View style={{ padding: 16, backgroundColor: '#f8fafc' }}>
              {/* Details */}
              <View style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: 12, 
                padding: 16,
                marginBottom: 12
              }}>
                <Text style={{ 
                  fontSize: 16, 
                  fontWeight: '700', 
                  color: '#1f2937',
                  marginBottom: 12
                }}>
                  Payment Details
                </Text>
                
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Work Order No</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.workOrderNo}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Payment No</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.paymentNo}</Text>
                  </View>
                </View>
                
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Vendor</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.vendor}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Amount</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.amount}</Text>
                  </View>
                </View>
                
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Reference Type</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.refType}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Date</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.date}</Text>
                  </View>
                </View>
                
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, color: '#6b7280' }}>Status</Text>
                    <StatusIndicator status={item.status} />
                  </View>
                </View>
              </View>
              
              {/* Action Buttons */}
              <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                backgroundColor: '#ffffff', 
                borderRadius: 12, 
                padding: 16
              }}>
                <TouchableOpacity 
                  style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    padding: 8
                  }}
                  onPress={() => console.log('View', item.paymentNo)}
                >
                  <Icon name="eye-outline" size={20} color="#3b82f6" style={{ marginRight: 8 }} />
                  <Text style={{ color: '#3b82f6', fontWeight: '600' }}>View</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    padding: 8
                  }}
                  onPress={() => console.log('Edit', item.paymentNo)}
                >
                  <Icon name="pencil-outline" size={20} color="#10b981" style={{ marginRight: 8 }} />
                  <Text style={{ color: '#10b981', fontWeight: '600' }}>Edit</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    padding: 8
                  }}
                  onPress={() => console.log('Download', item.paymentNo)}
                >
                  <Icon name="download" size={20} color="#6b7280" style={{ marginRight: 8 }} />
                  <Text style={{ color: '#6b7280', fontWeight: '600' }}>Download</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center',
                    padding: 8
                  }}
                  onPress={() => console.log('Email', item.paymentNo)}
                >
                  <Icon name="email-outline" size={20} color="#ef4444" style={{ marginRight: 8 }} />
                  <Text style={{ color: '#ef4444', fontWeight: '600' }}>Email</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        )}
      </View>
    </Animated.View>
  );
};

// Filter Modal Component
const FilterModal = ({ visible, onClose, currentFilter, onApplyFilter }) => {
  const [tempFilter, setTempFilter] = useState(currentFilter);

  const filters = ['All', 'Approved', 'Pending', 'Rejected'];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}>
        <Animated.View entering={FadeInUp} style={{ 
          backgroundColor: '#ffffff', 
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: 24
        }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 24
          }}>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: '700', 
              color: '#1f2937' 
            }}>
              Filter Advance Payments
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>
          
          <View style={{ gap: 12 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Status
            </Text>
            {filters.map((status) => (
              <TouchableOpacity
                key={status}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: (tempFilter === status || (status === 'All' && !tempFilter)) 
                    ? '#3b82f6' 
                    : '#e5e7eb',
                  backgroundColor: (tempFilter === status || (status === 'All' && !tempFilter)) 
                    ? '#eff6ff' 
                    : '#ffffff'
                }}
                onPress={() => setTempFilter(status === 'All' ? null : status)}
              >
                <Text style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: (tempFilter === status || (status === 'All' && !tempFilter))
                    ? '#3b82f6'
                    : '#374151'
                }}>
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={{ 
            flexDirection: 'row', 
            gap: 12, 
            marginTop: 24 
          }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#f3f4f6',
                padding: 16,
                borderRadius: 16,
                alignItems: 'center'
              }}
              onPress={onClose}
            >
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#3b82f6',
                padding: 16,
                borderRadius: 16,
                alignItems: 'center'
              }}
              onPress={() => {
                onApplyFilter(tempFilter);
                onClose();
              }}
            >
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#ffffff' 
              }}>
                Apply Filter
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

// Main Advance Payments Screen Component
const AdvancePaymentsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const toggleItem = useCallback((id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const filteredAdvancePaymentList = useMemo(() => {
    let result = [...advancePaymentData];
    
    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter(item => 
        item.paymentNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.workOrderNo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply status filter
    if (filterStatus) {
      result = result.filter(item => item.status === filterStatus);
    }
    
    return result;
  }, [filterStatus, searchQuery]);

  if (isLoading) {
    return (
      <MainLayout title="Advance Payments">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' }}>
          <View style={{ 
            backgroundColor: '#ffffff', 
            padding: 32, 
            borderRadius: 24,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={{ 
              marginTop: 16, 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Loading advance payments...
            </Text>
          </View>
        </View>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Advance Payments">
      <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
        {/* Header - Using blue gradient theme */}
        <LinearGradient 
          colors={['#1d4ed8', '#1e40af', '#1e3a8a']} 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View>
              <Text style={{ 
                fontSize: 24, 
                fontWeight: '700', 
                color: '#ffffff' 
              }}>
                Advance Payments
              </Text>
              <Text style={{ 
                fontSize: 14, 
                color: 'rgba(255, 255, 255, 0.8)',
                marginTop: 4
              }}>
                {filteredAdvancePaymentList.length} payments • {filterStatus || 'All statuses'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity
                style={{ 
                  padding: 12, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: 16 
                }}
                onPress={handleRefresh}
              >
                <Icon name="refresh" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: 16, 
            padding: 16,
            marginBottom: 16
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="magnify" size={20} color="#ffffff" style={{ marginRight: 12 }} />
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search payment no, vendors..."
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                style={{ 
                  flex: 1, 
                  color: '#ffffff', 
                  fontSize: 16 
                }}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Icon name="close-circle" size={20} color="rgba(255, 255, 255, 0.6)" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Filter Control */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <TouchableOpacity
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 16
              }}
              onPress={() => setShowFilterModal(true)}
            >
              <Icon name="filter-outline" size={16} color="#ffffff" />
              <Text style={{ 
                color: '#ffffff', 
                fontWeight: '600',
                marginLeft: 8
              }}>
                Filter
              </Text>
              {filterStatus && (
                <View style={{ 
                  marginLeft: 8, 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 12
                }}>
                  <Text style={{ 
                    fontSize: 12, 
                    color: '#ffffff' 
                  }}>
                    {filterStatus}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Advance Payment List */}
        <ScrollView 
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {filteredAdvancePaymentList.length > 0 ? (
            filteredAdvancePaymentList.map((item) => (
              <AdvancePaymentCard
                key={item.id}
                item={item}
                expanded={expandedItems[item.id]}
                onToggle={() => toggleItem(item.id)}
              />
            ))
          ) : (
            <Animated.View 
              entering={FadeInUp}
              style={{ 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: 40,
                backgroundColor: '#ffffff',
                borderRadius: 24,
                margin: 16
              }}
            >
              <Icon name="credit-card-outline" size={64} color="#d1d5db" />
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '600', 
                color: '#6b7280',
                marginTop: 16
              }}>
                No advance payments found
              </Text>
              <Text style={{ 
                fontSize: 14, 
                color: '#9ca3af',
                marginTop: 8,
                textAlign: 'center'
              }}>
                {searchQuery ? 
                  'Try adjusting your search terms or filters' : 
                  'No advance payments available'
                }
              </Text>
            </Animated.View>
          )}
        </ScrollView>

        {/* Filter Modal */}
        <FilterModal
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          currentFilter={filterStatus}
          onApplyFilter={setFilterStatus}
        />
      </View>
    </MainLayout>
  );
};

export default AdvancePaymentsScreen;